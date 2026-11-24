from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsedStorage(SdkBaseModel):
    environment_type: Optional[str] = Field(default=UNSET, alias="environmentType")
    environment_name: Optional[str] = Field(default=UNSET, alias="environmentName")
    application_family: Optional[str] = Field(default=UNSET, alias="applicationFamily")
    database_storage_in_kilobytes: Optional[int] = Field(default=UNSET, alias="databaseStorageInKilobytes")
    """Used database storage in kilobytes"""


class UsedStorageDict(TypedDict):
    environment_type: NotRequired[str]
    environment_name: NotRequired[str]
    application_family: NotRequired[str]
    database_storage_in_kilobytes: NotRequired[int]
