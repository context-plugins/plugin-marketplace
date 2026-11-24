from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorsModel(SdkBaseModel):
    identities: list[str]


class ErrorsModelDict(TypedDict):
    identities: list[str]
