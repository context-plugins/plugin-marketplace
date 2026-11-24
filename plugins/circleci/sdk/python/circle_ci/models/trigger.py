from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .actor import Actor, ActorDict


class Trigger(SdkBaseModel):
    """The trigger that started this pipeline"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of trigger"""

    received_at: Optional[RFC3339DateTime] = UNSET
    """When the trigger was received"""

    actor: Optional[Actor] = UNSET


class TriggerDict(TypedDict):
    type_: NotRequired[str]
    received_at: NotRequired[RFC3339DateTime]
    actor: NotRequired[ActorDict]
