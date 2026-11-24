from __future__ import annotations

from typing import TypeAlias

from ..response_input_content_part import ResponseInputContentPart, ResponseInputContentPartDict

ContentParallelAiResponsesApi: TypeAlias = str | list[ResponseInputContentPart]
"""Text content of the message. Either a string or a list of content parts (``{text, type}`` objects) for OpenAI SDK
clients."""

ContentParallelAiResponsesApiDict: TypeAlias = str | list[ResponseInputContentPartDict]
