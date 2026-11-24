from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RequireTicketPhone(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["require_ticket_phone"] = "require_ticket_phone"
    value: OptionalNullable[bool] = UNSET


class RequireTicketPhoneDict(TypedDict):
    name: Literal["require_ticket_phone"]
    value: NotRequired[bool | None]
