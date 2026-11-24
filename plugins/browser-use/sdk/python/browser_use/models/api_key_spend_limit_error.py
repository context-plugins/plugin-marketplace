from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.detail import Detail, DetailDict


class ApiKeySpendLimitError(SdkBaseModel):
    """FastAPI wraps endpoint errors in a top-level ``detail`` field."""

    detail: Detail


class ApiKeySpendLimitErrorDict(TypedDict):
    detail: DetailDict
