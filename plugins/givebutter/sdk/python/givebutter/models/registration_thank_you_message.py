from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class RegistrationThankYouMessage(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["registration_thank_you_message"] = "registration_thank_you_message"
    value: OptionalNullable[str] = UNSET


class RegistrationThankYouMessageDict(TypedDict):
    name: Literal["registration_thank_you_message"]
    value: NotRequired[str | None]
