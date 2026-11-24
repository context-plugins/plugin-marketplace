from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FactsOk(SdkBaseModel):
    data: Optional[Any] = UNSET
    """resoFacts blob — the full MLS attribute set (appliances, flooring, parking, view, and hundreds of other
    fields)."""

    request_id: Optional[str] = UNSET


class FactsOkDict(TypedDict):
    data: NotRequired[Any]
    request_id: NotRequired[str]
