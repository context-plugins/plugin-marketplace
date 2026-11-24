from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CustomBypassItem(SdkBaseModel):
    """A custom application bypass entry defined by the admin"""

    name: str
    """The application name being bypassed"""

    note: str
    """Note about this bypass entry"""

    updated_by: Optional[str] = Field(default=UNSET, alias="updatedBy")
    """The user who last updated this entry"""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """ISO-8601 timestamp when this entry was last updated"""


class CustomBypassItemDict(TypedDict):
    name: str
    note: str
    updated_by: NotRequired[str]
    updated_at: NotRequired[RFC3339DateTime]
