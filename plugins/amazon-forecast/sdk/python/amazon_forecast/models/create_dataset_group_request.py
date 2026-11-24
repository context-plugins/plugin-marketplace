from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.domain import DomainOrStr
from .tag_model import TagModel, TagModelDict


class CreateDatasetGroupRequest(SdkBaseModel):
    dataset_group_name: str = Field(alias="DatasetGroupName")
    """A name for the dataset group."""

    domain: DomainOrStr = Field(alias="Domain")
    """The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value
    specified for the Domain parameter of the CreateDataset operation must match. The Domain and DatasetType that you
    choose determine the fields that must be present in training data that you import to a dataset. For example, if you
    choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id,
    timestamp, and demand fields are present in your data. For more information, see Dataset groups."""

    dataset_arns: Optional[list[str]] = Field(default=UNSET, alias="DatasetArns")
    """An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the dataset group to help you categorize and organize them. Each tag
    consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:
    Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have
    only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters
    in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may
    have restrictions on allowed c"""


class CreateDatasetGroupRequestDict(TypedDict):
    dataset_group_name: str
    domain: DomainOrStr
    dataset_arns: NotRequired[list[str]]
    tags: NotRequired[list[TagModelDict]]
