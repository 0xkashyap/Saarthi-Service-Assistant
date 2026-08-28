import { describe, expect, it } from 'vitest';
import { findServices } from './services';
describe('local service matcher',()=>{
 it('matches a lost Aadhaar request to a replacement request',()=>expect(findServices('I lost my Aadhaar card')[0].service.id).toBe('aadhaar-lost-card'));
 it('matches PF balance to the passbook',()=>expect(findServices('How can I check my PF balance?')[0].service.id).toBe('pf-passbook'));
 it('does not claim confidence for unrelated requests',()=>expect(findServices('My neighbour is noisy')).toEqual([]));
});
