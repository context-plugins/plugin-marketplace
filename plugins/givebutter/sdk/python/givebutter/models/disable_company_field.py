from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableCompanyField(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_company_field"] = "disable_company_field"
    value: OptionalNullable[bool] = UNSET


class DisableCompanyFieldDict(TypedDict):
    name: Literal["disable_company_field"]
    value: NotRequired[bool | None]
