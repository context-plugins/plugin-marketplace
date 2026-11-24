from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoreLanguages(SdkBaseModel):
    languages: list[str]


class StoreLanguagesDict(TypedDict):
    languages: list[str]
