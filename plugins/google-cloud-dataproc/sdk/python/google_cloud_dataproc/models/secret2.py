from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Secret2(SdkBaseModel):
    """Optional. A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key
    Distribution Center (KDC)."""

    cloud_secret: Optional[str] = Field(default=UNSET, alias="cloudSecret")
    """Optional. The relative resource name of a Secret Manager secret version, in the following
    form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}."""


class Secret2Dict(TypedDict):
    cloud_secret: NotRequired[str]
