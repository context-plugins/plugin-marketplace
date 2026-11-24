from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SdkKeys(SdkBaseModel):
    mobile: list[Any]
    client: list[Any]
    server: list[Any]


class SdkKeysDict(TypedDict):
    mobile: list[Any]
    client: list[Any]
    server: list[Any]
