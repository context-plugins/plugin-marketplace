from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityInput(SdkBaseModel):
    """Must attach to a contact_id and/or deal_id."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """A registered activity.type (note/email/call/meeting/task/...)."""

    body: Optional[str] = UNSET
    contact_id: Optional[str] = UNSET
    deal_id: Optional[str] = UNSET
    occurred_at: Optional[str] = UNSET
    """ISO datetime; backdates imported history."""

    custom_fields: Optional[Any] = UNSET


class ActivityInputDict(TypedDict):
    type_: NotRequired[str]
    body: NotRequired[str]
    contact_id: NotRequired[str]
    deal_id: NotRequired[str]
    occurred_at: NotRequired[str]
    custom_fields: NotRequired[Any]
