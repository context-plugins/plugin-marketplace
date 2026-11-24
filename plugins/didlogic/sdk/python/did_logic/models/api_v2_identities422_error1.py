from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Identities422Error1(SdkBaseModel):
    errors: list[str]


class ApiV2Identities422Error1Dict(TypedDict):
    errors: list[str]
