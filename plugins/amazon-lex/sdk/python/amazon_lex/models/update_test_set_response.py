from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.modality2 import Modality2OrStr
from .enums.status2 import Status2OrStr
from .test_set_storage_location import TestSetStorageLocation, TestSetStorageLocationDict


class UpdateTestSetResponse(SdkBaseModel):
    test_set_id: Optional[str] = Field(default=UNSET, alias="testSetId")
    """The test set Id for which update test operation to be performed."""

    test_set_name: Optional[str] = Field(default=UNSET, alias="testSetName")
    """The test set name for the updated test set."""

    description: Optional[str] = UNSET
    """The test set description for the updated test set."""

    modality: Optional[Modality2OrStr] = UNSET
    """Indicates whether audio or text is used for the updated test set."""

    status: Optional[Status2OrStr] = UNSET
    """The status for the updated test set."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The roleARN used for any operation in the test set to access resources in the Amazon Web Services account."""

    num_turns: Optional[int] = Field(default=UNSET, alias="numTurns")
    """The number of conversation turns from the updated test set."""

    storage_location: Optional[TestSetStorageLocation] = Field(default=UNSET, alias="storageLocation")
    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time for the updated test set."""

    last_updated_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDateTime")
    """The date and time of the last update for the updated test set."""


class UpdateTestSetResponseDict(TypedDict):
    test_set_id: NotRequired[str]
    test_set_name: NotRequired[str]
    description: NotRequired[str]
    modality: NotRequired[Modality2OrStr]
    status: NotRequired[Status2OrStr]
    role_arn: NotRequired[str]
    num_turns: NotRequired[int]
    storage_location: NotRequired[TestSetStorageLocationDict]
    creation_date_time: NotRequired[RFC3339DateTime]
    last_updated_date_time: NotRequired[RFC3339DateTime]
