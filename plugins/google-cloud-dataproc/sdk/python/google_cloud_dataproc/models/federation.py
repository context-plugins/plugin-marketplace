from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .backend_metastore import BackendMetastore, BackendMetastoreDict
from .enums.state13 import State13OrStr


class Federation(SdkBaseModel):
    """Represents a federation of multiple backend metastores."""

    state_message: Optional[str] = Field(default=UNSET, alias="stateMessage")
    """Output only. Additional information about the current state of the metastore federation, if available."""

    version: Optional[str] = UNSET
    """Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible
    with the federation version."""

    name: Optional[str] = UNSET
    """Immutable. The relative resource name of the federation, of the form:
    projects/{project_number}/locations/{location_id}/federations/{federation_id}`."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time when the metastore federation was last updated."""

    uid: Optional[str] = UNSET
    """Output only. The globally unique resource identifier of the metastore federation."""

    state: Optional[State13OrStr] = UNSET
    """Output only. The current state of the federation."""

    labels: Optional[dict[str, str]] = UNSET
    """User-defined labels for the metastore federation."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time when the metastore federation was created."""

    tags: Optional[dict[str, str]] = UNSET
    """Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment":
    "production", "123/costCenter": "marketing"
    """

    backend_metastores: Optional[dict[str, BackendMetastore]] = Field(default=UNSET, alias="backendMetastores")
    """A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query
    time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at
    query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated
    before a BackendMetastore with a higher number."""

    endpoint_uri: Optional[str] = Field(default=UNSET, alias="endpointUri")
    """Output only. The federation endpoint."""


class FederationDict(TypedDict):
    state_message: NotRequired[str]
    version: NotRequired[str]
    name: NotRequired[str]
    update_time: NotRequired[str]
    uid: NotRequired[str]
    state: NotRequired[State13OrStr]
    labels: NotRequired[dict[str, str]]
    create_time: NotRequired[str]
    tags: NotRequired[dict[str, str]]
    backend_metastores: NotRequired[dict[str, BackendMetastoreDict]]
    endpoint_uri: NotRequired[str]
