from __future__ import annotations

from typing import TypeAlias

from ..json_schema_parallel_ai_tasks_api import JsonSchemaParallelAiTasksApi, JsonSchemaParallelAiTasksApiDict
from ..text_schema import TextSchema, TextSchemaDict

InputSchema: TypeAlias = str | JsonSchemaParallelAiTasksApi | TextSchema
"""Optional JSON schema or text description of expected input to the task. A bare string is equivalent to a text schema
with the same description."""

InputSchemaDict: TypeAlias = str | JsonSchemaParallelAiTasksApiDict | TextSchemaDict
