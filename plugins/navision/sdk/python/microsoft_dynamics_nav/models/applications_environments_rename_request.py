from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApplicationsEnvironmentsRenameRequest(SdkBaseModel):
    new_environment_name: str = Field(alias="NewEnvironmentName")
    """The new name for the environment"""


class ApplicationsEnvironmentsRenameRequestDict(TypedDict):
    new_environment_name: str
