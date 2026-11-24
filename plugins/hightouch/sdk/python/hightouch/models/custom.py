from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Custom(SdkBaseModel):
    """Custom query for sources that doesn't support sql. For example, Airtable."""

    query: Any


class CustomDict(TypedDict):
    query: Any
