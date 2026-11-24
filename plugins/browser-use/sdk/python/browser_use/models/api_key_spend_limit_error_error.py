from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.detail import Detail, DetailDict


class ApiKeySpendLimitErrorError(SdkBaseModel):
    """FastAPI wraps endpoint errors in a top-level ``detail`` field."""

    detail: Detail


class ApiKeySpendLimitErrorErrorDict(TypedDict):
    detail: DetailDict
