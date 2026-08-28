import { describe, expect, it } from 'vitest';
import { findServices } from './services';
describe('journey completion contract',()=>{
 it('has a deterministic, supported flow for every required journey',()=>{
  const inputs=['lost Aadhaar card','check PF balance','renew driving licence','apply birth certificate','update ration card'];
  expect(inputs.map(q=>findServices(q)[0].service.flow)).toEqual(['aadhaar-request','pf','licence','birth','ration']);
 });
});
