from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_config1 import EnvironmentConfig1, EnvironmentConfig1Dict
from .jupyter_config2 import JupyterConfig2, JupyterConfig2Dict
from .runtime_config4 import RuntimeConfig4, RuntimeConfig4Dict


class SessionTemplate(SdkBaseModel):
    """A representation of a session template."""

    description: Optional[str] = UNSET
    """Optional. Brief description of the template."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Labels to associate with sessions created using this template. Label keys must contain 1 to 63
    characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if
    present, must contain 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more
    than 32 labels can be associated with a session."""

    creator: Optional[str] = UNSET
    """Output only. The email address of the user who created the template."""

    jupyter_session: Optional[JupyterConfig2] = Field(default=UNSET, alias="jupyterSession")
    """Optional. Jupyter session config."""

    spark_connect_session: Optional[Any] = Field(default=UNSET, alias="sparkConnectSession")
    """Optional. Spark connect session config."""

    name: Optional[str] = UNSET
    """Required. Identifier. The resource name of the session template."""

    uuid: Optional[str] = UNSET
    """Output only. A session template UUID (Unique Universal Identifier). The service generates this value when it
    creates the session template."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the template was created."""

    environment_config: Optional[EnvironmentConfig1] = Field(default=UNSET, alias="environmentConfig")
    """Optional. Environment configuration for session execution."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. User-friendly display name for the session template. Can be up to 63 characters."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time the template was last updated."""

    runtime_config: Optional[RuntimeConfig4] = Field(default=UNSET, alias="runtimeConfig")
    """Optional. Runtime configuration for session execution."""


class SessionTemplateDict(TypedDict):
    description: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    creator: NotRequired[str]
    jupyter_session: NotRequired[JupyterConfig2Dict]
    spark_connect_session: NotRequired[Any]
    name: NotRequired[str]
    uuid: NotRequired[str]
    create_time: NotRequired[str]
    environment_config: NotRequired[EnvironmentConfig1Dict]
    display_name: NotRequired[str]
    update_time: NotRequired[str]
    runtime_config: NotRequired[RuntimeConfig4Dict]
