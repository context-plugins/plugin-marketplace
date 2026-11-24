from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .host_address import HostAddress, HostAddressDict
from .mongodb_ssl_config2 import MongodbSslConfig2, MongodbSslConfig2Dict
from .standard_connection_format import StandardConnectionFormat, StandardConnectionFormatDict


class MongodbProfile(SdkBaseModel):
    """Profile for connecting to a MongoDB source."""

    secret_manager_stored_password: Optional[str] = Field(default=UNSET, alias="secretManagerStoredPassword")
    """Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually
    exclusive with the ``password`` field."""

    additional_options: Optional[dict[str, str]] = Field(default=UNSET, alias="additionalOptions")
    """Optional. Specifies additional options for the MongoDB connection. The options should be sent as key-value pairs,
    for example: ``additional_options = {"serverSelectionTimeoutMS": "10000", "directConnection": "true"}``. Keys are
    case-sensitive and should match the official MongoDB connection string options:
    https://www.mongodb.com/docs/manual/reference/connection-string-options/ The server will not modify the values
    provided by the user."""

    srv_connection_format: Optional[Any] = Field(default=UNSET, alias="srvConnectionFormat")
    """Srv connection format."""

    host_addresses: Optional[list[HostAddress]] = Field(default=UNSET, alias="hostAddresses")
    """Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly
    one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the
    cluster with their respective ports."""

    username: Optional[str] = UNSET
    """Required. Username for the MongoDB connection."""

    password: Optional[str] = UNSET
    """Optional. Password for the MongoDB connection. Mutually exclusive with the ``secret_manager_stored_password``
    field."""

    replica_set: Optional[str] = Field(default=UNSET, alias="replicaSet")
    """Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV
    connection format, this field must be empty. For Standard connection format, this field must be specified."""

    standard_connection_format: Optional[StandardConnectionFormat] = Field(
        default=UNSET, alias="standardConnectionFormat"
    )
    """Standard connection format."""

    ssl_config: Optional[MongodbSslConfig2] = Field(default=UNSET, alias="sslConfig")
    """Optional. SSL configuration for the MongoDB connection."""


class MongodbProfileDict(TypedDict):
    secret_manager_stored_password: NotRequired[str]
    additional_options: NotRequired[dict[str, str]]
    srv_connection_format: NotRequired[Any]
    host_addresses: NotRequired[list[HostAddressDict]]
    username: NotRequired[str]
    password: NotRequired[str]
    replica_set: NotRequired[str]
    standard_connection_format: NotRequired[StandardConnectionFormatDict]
    ssl_config: NotRequired[MongodbSslConfig2Dict]
