from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Identities422Error(SdkBaseModel):
    errors: list[str]


class ApiV2Identities422ErrorDict(TypedDict):
    errors: list[str]
