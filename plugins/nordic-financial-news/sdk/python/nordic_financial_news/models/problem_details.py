from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProblemDetails(SdkBaseModel):
    type_: str = Field(alias="type")
    """URI that identifies the problem type"""

    title: str
    """Short human-readable summary"""

    status: int
    """HTTP status code"""

    detail: str
    """Human-readable explanation"""

    instance: str
    """URI that identifies the specific occurrence"""


class ProblemDetailsDict(TypedDict):
    type_: str
    title: str
    status: int
    detail: str
    instance: str
