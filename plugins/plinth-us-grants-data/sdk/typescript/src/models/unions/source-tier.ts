import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Which extraction tier produced the row: `universe` (lean, from the filing index) or `matched`
 * (rich, with a confidence). **Currently `universe` on every row.**, Which layer answered:
 * `universe` or a bespoke enrichment.
 */
export type SourceTier = string;

export const sourceTierSchema: Schema<SourceTier> = s.of<SourceTier>(s.union([s.string()]));
