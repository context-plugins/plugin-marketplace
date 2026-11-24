from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_coverage import CodeCoverage, CodeCoverageDict


class DescribeCodeCoveragesOutput(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If there are more items to return, this contains a token that is passed to a subsequent call to
    DescribeCodeCoverages to retrieve the next set of items."""

    code_coverages: Optional[list[CodeCoverage]] = Field(default=UNSET, alias="codeCoverages")
    """An array of CodeCoverage objects that contain the results."""


class DescribeCodeCoveragesOutputDict(TypedDict):
    next_token: NotRequired[str]
    code_coverages: NotRequired[list[CodeCoverageDict]]
