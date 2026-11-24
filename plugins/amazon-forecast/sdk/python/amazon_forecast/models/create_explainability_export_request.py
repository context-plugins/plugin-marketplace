from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict
from .tag_model import TagModel, TagModelDict


class CreateExplainabilityExportRequest(SdkBaseModel):
    explainability_export_name: str = Field(alias="ExplainabilityExportName")
    """A unique name for the Explainability export."""

    explainability_arn: str = Field(alias="ExplainabilityArn")
    """The Amazon Resource Name (ARN) of the Explainability to export."""

    destination: DataDestination = Field(alias="Destination")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional
    value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags:
    For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per
    resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in
    UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your
    tagging schema is used across ot"""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the exported data, CSV or PARQUET."""


class CreateExplainabilityExportRequestDict(TypedDict):
    explainability_export_name: str
    explainability_arn: str
    destination: DataDestinationDict
    tags: NotRequired[list[TagModelDict]]
    format: NotRequired[str]
