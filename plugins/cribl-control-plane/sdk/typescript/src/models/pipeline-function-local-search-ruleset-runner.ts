import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  functionConfSchemaLocalSearchRulesetRunner1Schema,
  type FunctionConfSchemaLocalSearchRulesetRunner1,
} from "./function-conf-schema-local-search-ruleset-runner1.js";

export type PipelineFunctionLocalSearchRulesetRunner = {
  /** JavaScript expression that selects data to pass through the Function. */
  filter?: string;
  /**
   * Identifier of the Function. Always <code>local_search_ruleset_runner</code>
   *
   * @default "local_search_ruleset_runner"
   */
  id?: "local_search_ruleset_runner";
  /** Brief description of the Pipeline function. */
  description?: string;
  /**
   * If <code>true</code>, disable the Pipeline function so that events are not passed through it.
   * Otherwise, <code>false</code>.
   */
  disabled?: boolean;
  /**
   * If <code>true</code>, stop passing events to downstream Pipeline Functions after the Function
   * executes. Otherwise, <code>false</code>.
   */
  final?: boolean;
  /** Configuration specific to the Pipeline Function. */
  conf: FunctionConfSchemaLocalSearchRulesetRunner1;
  /** Unique identifier of the group that contains the Pipeline Function. */
  groupId?: string;
};

export const pipelineFunctionLocalSearchRulesetRunnerSchema: Schema<PipelineFunctionLocalSearchRulesetRunner> =
  s.object<PipelineFunctionLocalSearchRulesetRunner>({
    filter: s.optional(s.string()),
    id: s.defaulted(s.literal("local_search_ruleset_runner"), "local_search_ruleset_runner"),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    final: s.optional(s.boolean()),
    conf: functionConfSchemaLocalSearchRulesetRunner1Schema,
    groupId: s.optional(s.string()),
  });
