from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UpdateInvoiceRequest(SdkBaseModel):
    metadata: OptionalNullable[dict[str, Any]] = UNSET


class UpdateInvoiceRequestDict(TypedDict):
    metadata: NotRequired[dict[str, Any] | None]
