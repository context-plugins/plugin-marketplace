from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .choice import Choice, ChoiceDict
from .completion_usage import CompletionUsage, CompletionUsageDict
from .enums.service_tier import ServiceTierOrStr
from .field_basis import FieldBasis, FieldBasisDict
from .moderation1 import Moderation1, Moderation1Dict


class ChatCompletion(SdkBaseModel):
    """Chat completion response."""

    id: str
    """The id of the chat completion."""

    choices: list[Choice]
    created: int
    model: str
    object_: Literal["chat.completion"] = Field(default="chat.completion", alias="object")
    moderation: Optional[Moderation1] = UNSET
    service_tier: Optional[ServiceTierOrStr] = UNSET
    system_fingerprint: Optional[str] = UNSET
    usage: Optional[CompletionUsage] = UNSET
    basis: Optional[list[FieldBasis]] = UNSET
    """Basis for the chat completion, including citations and reasoning supporting the output."""

    interaction_id: Optional[str] = UNSET
    """Identifier for this interaction. Pass as previous_interaction_id for follow-ups."""


class ChatCompletionDict(TypedDict):
    id: str
    choices: list[ChoiceDict]
    created: int
    model: str
    object_: Literal["chat.completion"]
    moderation: NotRequired[Moderation1Dict]
    service_tier: NotRequired[ServiceTierOrStr]
    system_fingerprint: NotRequired[str]
    usage: NotRequired[CompletionUsageDict]
    basis: NotRequired[list[FieldBasisDict]]
    interaction_id: NotRequired[str]
