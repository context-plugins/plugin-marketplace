from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApplicationsEnvironmentsAppsAppIdUninstallRequest(SdkBaseModel):
    delete_data: Optional[bool] = Field(default=UNSET, alias="deleteData")
    """Whether to delete data associated with the extension"""


class ApplicationsEnvironmentsAppsAppIdUninstallRequestDict(TypedDict):
    delete_data: NotRequired[bool]
