from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .choice import Choice, ChoiceDict
from .completion_usage import CompletionUsage, CompletionUsageDict
from .enums.service_tier import ServiceTierOrStr
from .field_basis import FieldBasis, FieldBasisDict
from .moderation import Moderation, ModerationDict


class ChatCompletionResponseChunk(SdkBaseModel):
    """Chat completion response chunk."""

    id: str
    """The id of the chat completion response chunk."""

    choices: list[Choice]
    created: int
    model: str
    object_: Literal["chat.completion.chunk"] = Field(default="chat.completion.chunk", alias="object")
    moderation: Optional[Moderation] = UNSET
    service_tier: Optional[ServiceTierOrStr] = UNSET
    system_fingerprint: Optional[str] = UNSET
    usage: Optional[CompletionUsage] = UNSET
    type_: Literal["chat.completion.chunk"] = Field(default="chat.completion.chunk", alias="type")
    """The type of the chat completion chunk. Always ``chat.completion.chunk``."""

    basis: Optional[list[FieldBasis]] = UNSET
    """Basis for the chat completion chunk, including citations and reasoning supporting the output."""

    interaction_id: Optional[str] = UNSET
    """Identifier for this interaction. Pass as previous_interaction_id for follow-ups."""


class ChatCompletionResponseChunkDict(TypedDict):
    id: str
    choices: list[ChoiceDict]
    created: int
    model: str
    object_: Literal["chat.completion.chunk"]
    moderation: NotRequired[ModerationDict]
    service_tier: NotRequired[ServiceTierOrStr]
    system_fingerprint: NotRequired[str]
    usage: NotRequired[CompletionUsageDict]
    type_: Literal["chat.completion.chunk"]
    basis: NotRequired[list[FieldBasisDict]]
    interaction_id: NotRequired[str]
