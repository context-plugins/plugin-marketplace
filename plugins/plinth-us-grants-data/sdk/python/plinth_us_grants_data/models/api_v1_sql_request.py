from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SqlRequest(SdkBaseModel):
    sql: str
    """A single read-only SELECT (or WITH ... SELECT) statement."""


class ApiV1SqlRequestDict(TypedDict):
    sql: str
