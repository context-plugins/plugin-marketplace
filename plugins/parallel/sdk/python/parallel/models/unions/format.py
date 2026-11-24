from __future__ import annotations

from typing import TypeAlias

from ..response_format_json_object import ResponseFormatJsonObject, ResponseFormatJsonObjectDict
from ..response_format_text import ResponseFormatText, ResponseFormatTextDict
from ..response_format_text_json_schema_config import (
    ResponseFormatTextJsonSchemaConfig,
    ResponseFormatTextJsonSchemaConfigDict,
)

Format: TypeAlias = ResponseFormatText | ResponseFormatTextJsonSchemaConfig | ResponseFormatJsonObject

FormatDict: TypeAlias = ResponseFormatTextDict | ResponseFormatTextJsonSchemaConfigDict | ResponseFormatJsonObjectDict
