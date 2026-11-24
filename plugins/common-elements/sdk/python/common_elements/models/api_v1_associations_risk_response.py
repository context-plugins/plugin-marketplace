from __future__ import annotations

from typing import Any, Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1AssociationsRiskResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Any
    """Response payload. See the example on this operation for the exact shape."""


class ApiV1AssociationsRiskResponseDict(TypedDict):
    ok: Literal["True"]
    data: Any
