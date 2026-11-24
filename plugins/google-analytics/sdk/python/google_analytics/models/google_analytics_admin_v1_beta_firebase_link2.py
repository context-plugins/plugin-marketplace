from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaFirebaseLink2(SdkBaseModel):
    """A snapshot of a FirebaseLink resource in change history."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Time when this FirebaseLink was originally created."""

    name: Optional[str] = UNSET
    """Identifier. Example format: properties/1234/firebaseLinks/5678"""

    project: Optional[str] = UNSET
    """Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using
    either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have
    a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'"""


class GoogleAnalyticsAdminV1BetaFirebaseLink2Dict(TypedDict):
    create_time: NotRequired[str]
    name: NotRequired[str]
    project: NotRequired[str]
