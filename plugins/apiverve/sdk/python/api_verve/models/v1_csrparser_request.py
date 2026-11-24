from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1CsrparserRequest(SdkBaseModel):
    csr: str
    """The PEM-formatted Certificate Signing Request to parse"""


class V1CsrparserRequestDict(TypedDict):
    csr: str
