from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BulkCompliance(SdkBaseModel):
    eins: list[str]
    """Up to 100 EINs. Any format — normalized per EIN."""


class BulkComplianceDict(TypedDict):
    eins: list[str]
