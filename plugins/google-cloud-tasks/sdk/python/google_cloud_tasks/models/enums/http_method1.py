from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HttpMethod1(str, Enum):
    """The HTTP method to use for the request. The default is POST. The app's request handler for the task's target URL
    must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405
    (Method Not Allowed). See `Writing a push task request handler
    <https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler>`__
    and the App Engine documentation for your runtime on `How Requests are Handled
    <https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled>`__."""

    HTTP_METHOD_UNSPECIFIED = "HTTP_METHOD_UNSPECIFIED"
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"

    __str__ = str.__str__


HttpMethod1OrStr: TypeAlias = Annotated[HttpMethod1 | str, open_enum_validator(HttpMethod1)]
