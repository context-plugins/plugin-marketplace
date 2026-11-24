from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class HideContactInformation(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["hide_contact_information"] = "hide_contact_information"
    value: OptionalNullable[bool] = UNSET


class HideContactInformationDict(TypedDict):
    name: Literal["hide_contact_information"]
    value: NotRequired[bool | None]
