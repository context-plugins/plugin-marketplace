from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state5 import State5OrStr
from .environment_config2 import EnvironmentConfig2, EnvironmentConfig2Dict
from .jupyter_config2 import JupyterConfig2, JupyterConfig2Dict
from .runtime_config2 import RuntimeConfig2, RuntimeConfig2Dict
from .runtime_info1 import RuntimeInfo1, RuntimeInfo1Dict
from .session_state_history import SessionStateHistory, SessionStateHistoryDict


class Session(SdkBaseModel):
    """A representation of a session."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. The labels to associate with the session. Label keys must contain 1 to 63 characters, and must conform
    to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63
    characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be
    associated with a session."""

    spark_connect_session: Optional[Any] = Field(default=UNSET, alias="sparkConnectSession")
    """Optional. Spark connect session config."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the session was created."""

    runtime_info: Optional[RuntimeInfo1] = Field(default=UNSET, alias="runtimeInfo")
    """Output only. Runtime information about session execution."""

    uuid: Optional[str] = UNSET
    """Output only. A session UUID (Unique Universal Identifier). The service generates this value when it creates the
    session."""

    state: Optional[State5OrStr] = UNSET
    """Output only. A state of the session."""

    name: Optional[str] = UNSET
    """Identifier. The resource name of the session."""

    runtime_config: Optional[RuntimeConfig2] = Field(default=UNSET, alias="runtimeConfig")
    """Optional. Runtime configuration for the session execution."""

    user: Optional[str] = UNSET
    """Optional. The email address of the user who owns the session."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Session state details, such as the failure description if the state is FAILED."""

    session_template: Optional[str] = Field(default=UNSET, alias="sessionTemplate")
    """Optional. The session template used by the session.Resource names and short template IDs are valid. Examples: *
    projects/[project_id]/locations/[dataproc_region]/sessionTemplates/[template_id] * [template_id]The template must be
    in the same project and Dataproc region as the session."""

    creator: Optional[str] = UNSET
    """Output only. The email address of the user who created the session."""

    jupyter_session: Optional[JupyterConfig2] = Field(default=UNSET, alias="jupyterSession")
    """Optional. Jupyter session config."""

    environment_config: Optional[EnvironmentConfig2] = Field(default=UNSET, alias="environmentConfig")
    """Optional. Environment configuration for the session execution."""

    state_history: Optional[list[SessionStateHistory]] = Field(default=UNSET, alias="stateHistory")
    """Output only. Historical state information for the session."""

    state_time: Optional[str] = Field(default=UNSET, alias="stateTime")
    """Output only. The time when the session entered the current state."""


class SessionDict(TypedDict):
    labels: NotRequired[dict[str, str]]
    spark_connect_session: NotRequired[Any]
    create_time: NotRequired[str]
    runtime_info: NotRequired[RuntimeInfo1Dict]
    uuid: NotRequired[str]
    state: NotRequired[State5OrStr]
    name: NotRequired[str]
    runtime_config: NotRequired[RuntimeConfig2Dict]
    user: NotRequired[str]
    state_message: NotRequired[str]
    session_template: NotRequired[str]
    creator: NotRequired[str]
    jupyter_session: NotRequired[JupyterConfig2Dict]
    environment_config: NotRequired[EnvironmentConfig2Dict]
    state_history: NotRequired[list[SessionStateHistoryDict]]
    state_time: NotRequired[str]
