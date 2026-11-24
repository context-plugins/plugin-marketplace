from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppEngineRouting(SdkBaseModel):
    """App Engine Routing. Defines routing characteristics specific to App Engine - service, version, and instance. For
    more information about services, versions, and instances see `An Overview of App Engine
    <https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine>`__, `Microservices Architecture on Google
    App Engine <https://cloud.google.com/appengine/docs/python/microservices-on-app-engine>`__, `App Engine Standard
    request routing <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed>`__, and `App
    Engine Flex request routing <https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed>`__.
    Using AppEngineRouting requires https://cloud.google.com/appengine/docs/admin-api/access-control Google IAM
    permission for the project and the following scope: ``https://www.googleapis.com/auth/cloud-platform``"""

    version: Optional[str] = UNSET
    """App version. By default, the task is sent to the version which is the default version when the task is attempted.
    For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service,
    version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name;
    custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the
    empty string."""

    service: Optional[str] = UNSET
    """App service. By default, the task is sent to the service which is the default service when the task is attempted.
    For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service,
    version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name;
    custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the
    empty string."""

    instance: Optional[str] = UNSET
    """App instance. By default, the task is sent to an instance which is available when the task is attempted. Requests
    can only be sent to a specific instance if `manual scaling is used in App Engine Standard
    <https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes>`__.
    App Engine Flex does not support instances. For more information, see `App Engine Standard request routing
    <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed>`__ and `App Engine Flex request
    routing <https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed>`__."""

    host: Optional[str] = UNSET
    """Output only. The host that the task is sent to. The host is constructed from the domain name of the app
    associated with the queue's project ID (for example .appspot.com), and the service, version, and instance. Tasks
    which were created using the App Engine SDK might have a custom domain name. For more information, see `How Requests
    are Routed <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed>`__."""


class AppEngineRoutingDict(TypedDict):
    version: NotRequired[str]
    service: NotRequired[str]
    instance: NotRequired[str]
    host: NotRequired[str]
