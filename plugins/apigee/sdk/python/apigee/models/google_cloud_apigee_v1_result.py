from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_access import GoogleCloudApigeeV1Access, GoogleCloudApigeeV1AccessDict
from .google_cloud_apigee_v1_properties1 import GoogleCloudApigeeV1Properties1, GoogleCloudApigeeV1Properties1Dict
from .google_cloud_apigee_v1_property import GoogleCloudApigeeV1Property, GoogleCloudApigeeV1PropertyDict


class GoogleCloudApigeeV1Result(SdkBaseModel):
    """Result is short for "action result", could be different types identified by "action_result" field. Supported
    types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the
    contents could be virtual host info, state change result, or execution metadata. Required fields : properties,
    timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods
    type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers,
    reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information
    of a http error message. Contains detail error message, reason phrase and status code. Required fields : content,
    headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove.
    Required fields : accessList"""

    reason_phrase: Optional[str] = Field(default=UNSET, alias="reasonPhrase")
    """HTTP response phrase"""

    timestamp: Optional[str] = UNSET
    """Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, ``"timestamp" :
    "12-08-19 00:31:59:960"``"""

    u_ri: Optional[str] = Field(default=UNSET, alias="uRI")
    """The relative path of the api proxy. for example, ``"uRI" : "/iloveapis"``"""

    verb: Optional[str] = UNSET
    """HTTP method verb"""

    content: Optional[str] = UNSET
    r"""Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed
    out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}"
    """

    access_list: Optional[list[GoogleCloudApigeeV1Access]] = Field(default=UNSET, alias="accessList")
    """A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove."""

    properties: Optional[GoogleCloudApigeeV1Properties1] = UNSET
    """Name value pairs used for DebugInfo ActionResult."""

    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """HTTP response code"""

    headers: Optional[list[GoogleCloudApigeeV1Property]] = UNSET
    """A list of HTTP headers. for example, '"headers" : [ { "name" : "Content-Length", "value" : "83" }, { "name" :
    "Content-Type", "value" : "application/json" } ]'"""

    action_result: Optional[str] = Field(default=UNSET, alias="ActionResult")
    """Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage,
    VariableAccess"""


class GoogleCloudApigeeV1ResultDict(TypedDict):
    reason_phrase: NotRequired[str]
    timestamp: NotRequired[str]
    u_ri: NotRequired[str]
    verb: NotRequired[str]
    content: NotRequired[str]
    access_list: NotRequired[list[GoogleCloudApigeeV1AccessDict]]
    properties: NotRequired[GoogleCloudApigeeV1Properties1Dict]
    status_code: NotRequired[str]
    headers: NotRequired[list[GoogleCloudApigeeV1PropertyDict]]
    action_result: NotRequired[str]
