from __future__ import annotations

from typing import TypeAlias

from ..response_format_json_object import ResponseFormatJsonObject, ResponseFormatJsonObjectDict
from ..response_format_json_schema import ResponseFormatJsonSchema, ResponseFormatJsonSchemaDict
from ..response_format_text import ResponseFormatText, ResponseFormatTextDict

ResponseFormat: TypeAlias = ResponseFormatText | ResponseFormatJsonSchema | ResponseFormatJsonObject
"""The response format to use for chat completions. OpenAI compatible."""

ResponseFormatDict: TypeAlias = ResponseFormatTextDict | ResponseFormatJsonSchemaDict | ResponseFormatJsonObjectDict
