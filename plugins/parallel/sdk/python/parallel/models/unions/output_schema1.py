from __future__ import annotations

from typing import TypeAlias

from ..auto_schema import AutoSchema, AutoSchemaDict
from ..json_schema_parallel_ai_tasks_api import JsonSchemaParallelAiTasksApi, JsonSchemaParallelAiTasksApiDict
from ..text_schema import TextSchema, TextSchemaDict

OutputSchema1: TypeAlias = JsonSchemaParallelAiTasksApi | TextSchema | AutoSchema | str
"""JSON schema or text fully describing the desired output from the task. Descriptions of output fields will determine
the form and content of the response. A bare string is equivalent to a text schema with the same description."""

OutputSchema1Dict: TypeAlias = JsonSchemaParallelAiTasksApiDict | TextSchemaDict | AutoSchemaDict | str
