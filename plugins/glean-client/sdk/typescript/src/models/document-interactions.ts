import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { reactionSchema, type Reaction } from "./reaction.js";
import { shareSchema, type Share } from "./share.js";

export type DocumentInteractions = {
  /** The count of comments (thread replies in the case of slack). */
  numComments?: number;
  /** The count of reactions on the document. */
  numReactions?: number;
  /**
   * To be deprecated in favor of reacts. A (potentially non-exhaustive) list of reactions for the
   * document.
   *
   * @deprecated
   */
  reactions?: string[];
  reacts?: Reaction[];
  /**
   * Describes instances of someone posting a link to this document in one of our indexed
   * datasources.
   */
  shares?: Share[];
  visitorCount?: CountInfo;
};

export const documentInteractionsSchema: Schema<DocumentInteractions> = s.object<DocumentInteractions>({
  numComments: s.optional(s.int()),
  numReactions: s.optional(s.int()),
  reactions: s.optional(s.array(s.string())),
  reacts: s.optional(s.array(s.lazy(() => reactionSchema))),
  shares: s.optional(s.array(s.lazy(() => shareSchema))),
  visitorCount: s.optional(s.lazy(() => countInfoSchema)),
});
