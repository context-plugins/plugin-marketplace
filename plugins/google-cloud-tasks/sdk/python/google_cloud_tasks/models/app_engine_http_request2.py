from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_engine_routing3 import AppEngineRouting3, AppEngineRouting3Dict
from .enums.http_method1 import HttpMethod1OrStr


class AppEngineHttpRequest2(SdkBaseModel):
    """HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has
    AppEngineHttpRequest set."""

    app_engine_routing: Optional[AppEngineRouting3] = Field(default=UNSET, alias="appEngineRouting")
    """Task-level setting for App Engine routing. * If app_engine_routing_override is set on the queue, this value is
    used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing."""

    headers: Optional[dict[str, str]] = UNSET
    """HTTP request headers. This map contains the header field names and values. Headers can be set when the task is
    created. Repeated headers are not supported but a header value can contain commas. Cloud Tasks sets some headers to
    default values: * ``User-Agent``: By default, this header is ``"AppEngine-Google;
    (+http://code.google.com/appengine)"``. This header can be modified, but Cloud Tasks will append
    ``"AppEngine-Google; (+http://code.google.com/appengine)"`` to the modified ``User-Agent``. If the task has a body,
    Cloud Tasks sets the following headers: * ``Content-Type``: By default, the ``Content-Type`` header is set to
    ``"application/octet-stream"``. The default can be overridden by explicitly setting ``Content-Type`` to a particular
    media type when the task is created. For example, ``Content-Type`` can be set to ``"application/json"``. *
    ``Content-Length``: This is computed by Cloud Tasks. This value is output only. It cannot be changed. The headers
    below cannot be set or overridden: * ``Host`` * ``X-Google-*`` * ``X-AppEngine-*`` In addition, Cloud Tasks sets
    some headers when the task is dispatched, such as headers containing information about the task; see `request
    headers <https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers>`__. These headers
    are set only when the task is dispatched, so they are not visible when the task is returned in a Cloud Tasks
    response. Although there is no specific limit for the maximum number of headers or the size, there is a limit on the
    maximum size of the Task. For more information, see the CreateTask documentation."""

    http_method: Optional[HttpMethod1OrStr] = Field(default=UNSET, alias="httpMethod")
    """The HTTP method to use for the request. The default is POST. The app's request handler for the task's target URL
    must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405
    (Method Not Allowed). See `Writing a push task request handler
    <https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler>`__
    and the App Engine documentation for your runtime on `How Requests are Handled
    <https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled>`__."""

    body: Optional[str] = UNSET
    """HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It is an error to set a body
    on a task with an incompatible HttpMethod."""

    relative_uri: Optional[str] = Field(default=UNSET, alias="relativeUri")
    """The relative URI. The relative URI must begin with "/" and must be a valid HTTP relative URI. It can contain a
    path and query string arguments. If the relative URI is empty, then the root path "/" will be used. No spaces are
    allowed, and the maximum length allowed is 2083 characters."""


class AppEngineHttpRequest2Dict(TypedDict):
    app_engine_routing: NotRequired[AppEngineRouting3Dict]
    headers: NotRequired[dict[str, str]]
    http_method: NotRequired[HttpMethod1OrStr]
    body: NotRequired[str]
    relative_uri: NotRequired[str]
