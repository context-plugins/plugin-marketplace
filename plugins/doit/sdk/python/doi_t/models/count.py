from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type6_doi_t_reports_api import Type6DoiTReportsApiOrStr


class Count(SdkBaseModel):
    """The field to count distinct values of. Only applicable when aggregation is set to "count". On PATCH, omit to
    preserve the existing field; send null to remove it. A PATCH that sets ``aggregation`` to a value other than "count"
    without sending ``count`` removes it."""

    id: str
    """The field identifier to count distinct values of."""

    type_: Type6DoiTReportsApiOrStr = Field(alias="type")
    """The metadata field type."""


class CountDict(TypedDict):
    id: str
    type_: Type6DoiTReportsApiOrStr
