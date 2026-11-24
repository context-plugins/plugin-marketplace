from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PublicCheckPayments(SdkBaseModel):
    """Mailing instructions for check donations. Max 1000 characters."""

    name: Literal["public_check_payments"] = "public_check_payments"
    value: OptionalNullable[str] = UNSET


class PublicCheckPaymentsDict(TypedDict):
    name: Literal["public_check_payments"]
    value: NotRequired[str | None]
