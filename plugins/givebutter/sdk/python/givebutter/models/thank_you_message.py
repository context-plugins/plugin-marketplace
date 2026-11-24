from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ThankYouMessage(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["thank_you_message"] = "thank_you_message"
    value: OptionalNullable[str] = UNSET


class ThankYouMessageDict(TypedDict):
    name: Literal["thank_you_message"]
    value: NotRequired[str | None]
