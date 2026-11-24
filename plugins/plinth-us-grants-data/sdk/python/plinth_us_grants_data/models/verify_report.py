from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class VerifyReport(SdkBaseModel):
    body: Any
    """A retained compliance response, exactly as returned."""


class VerifyReportDict(TypedDict):
    body: Any
