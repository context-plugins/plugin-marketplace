from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.role_parallel_ai_responses_api import RoleParallelAiResponsesApiOrStr
from .unions.content_parallel_ai_responses_api import ContentParallelAiResponsesApi, ContentParallelAiResponsesApiDict


class ResponseInputMessage(SdkBaseModel):
    """A single input message for the Responses API.

    ``content`` accepts either a bare string (``"hi"``) or the canonical OpenAI list-of-parts (``[{"text": "hi", "type":
    "input_text"}]``)."""

    role: RoleParallelAiResponsesApiOrStr
    """The role of the message author."""

    content: ContentParallelAiResponsesApi
    """Text content of the message. Either a string or a list of content parts (``{text, type}`` objects) for OpenAI SDK
    clients."""


class ResponseInputMessageDict(TypedDict):
    role: RoleParallelAiResponsesApiOrStr
    content: ContentParallelAiResponsesApiDict
