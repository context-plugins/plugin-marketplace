from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.create_queue_error import CreateQueueErrorBody, create_queue_error_mapper
from ..errors.delete_queue_error import DeleteQueueErrorBody, delete_queue_error_mapper
from ..errors.get_queue_attributes_error import GetQueueAttributesErrorBody, get_queue_attributes_error_mapper
from ..errors.get_queue_url_error import GetQueueUrlErrorBody, get_queue_url_error_mapper
from ..errors.list_dead_letter_source_queues_error import (
    ListDeadLetterSourceQueuesErrorBody,
    list_dead_letter_source_queues_error_mapper,
)
from ..errors.list_queues_error import ListQueuesErrorBody, list_queues_error_mapper
from ..errors.purge_queue_error import PurgeQueueErrorBody, purge_queue_error_mapper
from ..errors.set_queue_attributes_error import SetQueueAttributesErrorBody, set_queue_attributes_error_mapper
from ..errors.tag_queue_error import TagQueueErrorBody, tag_queue_error_mapper
from ..errors.untag_queue_error import UntagQueueErrorBody, untag_queue_error_mapper
from ..models.enums.x_amz_target1_amazon_simple_queue_service_queues_api import (
    XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target2_amazon_simple_queue_service_queues_api import (
    XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target3_amazon_simple_queue_service_queues_api import (
    XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target4_amazon_simple_queue_service_queues_api import (
    XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target5_amazon_simple_queue_service_queues_api import (
    XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target6_amazon_simple_queue_service_queues_api import (
    XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target7_amazon_simple_queue_service_queues_api import (
    XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target8_amazon_simple_queue_service_queues_api import (
    XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target9_amazon_simple_queue_service_queues_api import (
    XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..models.enums.x_amz_target_amazon_simple_queue_service_queues_api import (
    XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr,
)
from ..server.server import Server


class Queues:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QueuesWithRawResponse(client, server, auth)

    def create_queue(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following
        in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the
        queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must
        either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a
        FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer
        Guide. If you don't provide a value for an attribute, the queue is created with the default value for the
        attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
        To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues
        and is unique within the scope of your queues. After you create a queue, you must wait at least one second after
        the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action.
        This action only requires the QueueName parameter. When creating queues, keep the following poi

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; InvalidAttributeValue; QueueDeletedRecently; QueueNameExists;
                UnsupportedOperation InvalidSecurity; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_queue(x_amz_target, request_options=request_options))

    def delete_queue(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the
        DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete
        a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60
        seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the
        message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a
        queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses
        the HTTP GET verb.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.delete_queue(x_amz_target, request_options=request_options))

    def get_queue_attributes(
        self,
        x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether
        QueueName ends with the .fifo suffix.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; QueueDoesNotExist; UnsupportedOperation InvalidSecurity;
                RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_queue_attributes(x_amz_target, request_options=request_options))

    def get_queue_url(
        self,
        x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's
        name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services
        account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the
        queue owner must grant you the necessary permissions to access the queue. For more information about accessing
        shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon
        SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.get_queue_url(x_amz_target, request_options=request_options))

    def list_dead_letter_source_queues(
        self,
        x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter
        queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to
        specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response
        includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the
        response includes a value for NextToken. Use NextToken as a parameter in your next request to
        ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter
        queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_dead_letter_source_queues(x_amz_target, request_options=request_options)
        )

    def list_queues(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you
        specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the
        specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the
        request to specify the maximum number of results to be returned in the response. If you do not set MaxResults,
        the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to
        display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to
        listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled UnsupportedOperation ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.list_queues(x_amz_target, request_options=request_options))

    def purge_queue(
        self,
        x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter.
        When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion
        process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages
        sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages
        sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; PurgeQueueInProgress; RequestThrottled QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.purge_queue(x_amz_target, request_options=request_options))

    def set_queue_attributes(
        self,
        x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the
        change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
        Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages
        in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below
        the age of existing messages. In the future, new attributes might be added. If you write code that calls this
        action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account
        permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and
        a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny
        permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; InvalidAttributeValue; QueueDoesNotExist;
                UnsupportedOperation InvalidSecurity; OverLimit; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_queue_attributes(x_amz_target, request_options=request_options))

    def tag_queue(
        self,
        x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.tag_queue(x_amz_target, request_options=request_options))

    def untag_queue(
        self,
        x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.untag_queue(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> QueuesWithRawResponse:
        return self._with_raw_response


class AsyncQueues:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQueuesWithRawResponse(client, server, auth)

    async def create_queue(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following
        in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the
        queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must
        either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a
        FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer
        Guide. If you don't provide a value for an attribute, the queue is created with the default value for the
        attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
        To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues
        and is unique within the scope of your queues. After you create a queue, you must wait at least one second after
        the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action.
        This action only requires the QueueName parameter. When creating queues, keep the following poi

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; InvalidAttributeValue; QueueDeletedRecently; QueueNameExists;
                UnsupportedOperation InvalidSecurity; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_queue(x_amz_target, request_options=request_options))

    async def delete_queue(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the
        DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete
        a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60
        seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the
        message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a
        queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses
        the HTTP GET verb.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_queue(x_amz_target, request_options=request_options))

    async def get_queue_attributes(
        self,
        x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether
        QueueName ends with the .fifo suffix.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; QueueDoesNotExist; UnsupportedOperation InvalidSecurity;
                RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_queue_attributes(x_amz_target, request_options=request_options))

    async def get_queue_url(
        self,
        x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's
        name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services
        account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the
        queue owner must grant you the necessary permissions to access the queue. For more information about accessing
        shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon
        SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.get_queue_url(x_amz_target, request_options=request_options))

    async def list_dead_letter_source_queues(
        self,
        x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter
        queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to
        specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response
        includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the
        response includes a value for NextToken. Use NextToken as a parameter in your next request to
        ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter
        queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_dead_letter_source_queues(x_amz_target, request_options=request_options)
        )

    async def list_queues(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you
        specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the
        specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the
        request to specify the maximum number of results to be returned in the response. If you do not set MaxResults,
        the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to
        display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to
        listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled UnsupportedOperation ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.list_queues(x_amz_target, request_options=request_options))

    async def purge_queue(
        self,
        x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter.
        When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion
        process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages
        sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages
        sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; PurgeQueueInProgress; RequestThrottled QueueDoesNotExist;
                UnsupportedOperation ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.purge_queue(x_amz_target, request_options=request_options))

    async def set_queue_attributes(
        self,
        x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the
        change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
        Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages
        in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below
        the age of existing messages. In the future, new attributes might be added. If you write code that calls this
        action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account
        permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and
        a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny
        permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidAttributeName; InvalidAttributeValue; QueueDoesNotExist;
                UnsupportedOperation InvalidSecurity; OverLimit; RequestThrottled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.set_queue_attributes(x_amz_target, request_options=request_options))

    async def tag_queue(
        self,
        x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.tag_queue(x_amz_target, request_options=request_options))

    async def untag_queue(
        self,
        x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidAddress InvalidSecurity; RequestThrottled QueueDoesNotExist; UnsupportedOperation ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.untag_queue(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncQueuesWithRawResponse:
        return self._with_raw_response


class QueuesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_queue(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateQueueErrorBody]:
        """Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following
        in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the
        queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must
        either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a
        FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer
        Guide. If you don't provide a value for an attribute, the queue is created with the default value for the
        attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
        To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues
        and is unique within the scope of your queues. After you create a queue, you must wait at least one second after
        the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action.
        This action only requires the QueueName parameter. When creating queues, keep the following poi

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateQueue"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_queue_error_mapper,
            request_options=request_options,
        )

    def delete_queue(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteQueueErrorBody]:
        """Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the
        DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete
        a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60
        seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the
        message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a
        queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses
        the HTTP GET verb.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteQueue"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_queue_error_mapper,
            request_options=request_options,
        )

    def get_queue_attributes(
        self,
        x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetQueueAttributesErrorBody]:
        """Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether
        QueueName ends with the .fifo suffix.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetQueueAttributes"),
            headers=[
                param[XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_queue_attributes_error_mapper,
            request_options=request_options,
        )

    def get_queue_url(
        self,
        x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetQueueUrlErrorBody]:
        """The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's
        name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services
        account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the
        queue owner must grant you the necessary permissions to access the queue. For more information about accessing
        shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon
        SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetQueueUrl"),
            headers=[
                param[XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_queue_url_error_mapper,
            request_options=request_options,
        )

    def list_dead_letter_source_queues(
        self,
        x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDeadLetterSourceQueuesErrorBody]:
        """Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter
        queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to
        specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response
        includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the
        response includes a value for NextToken. Use NextToken as a parameter in your next request to
        ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter
        queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDeadLetterSourceQueues"),
            headers=[
                param[XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_dead_letter_source_queues_error_mapper,
            request_options=request_options,
        )

    def list_queues(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListQueuesErrorBody]:
        """Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you
        specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the
        specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the
        request to specify the maximum number of results to be returned in the response. If you do not set MaxResults,
        the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to
        display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to
        listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListQueues"),
            headers=[
                param[XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_queues_error_mapper,
            request_options=request_options,
        )

    def purge_queue(
        self,
        x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PurgeQueueErrorBody]:
        """Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter.
        When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion
        process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages
        sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages
        sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PurgeQueue"),
            headers=[
                param[XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=purge_queue_error_mapper,
            request_options=request_options,
        )

    def set_queue_attributes(
        self,
        x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetQueueAttributesErrorBody]:
        """Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the
        change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
        Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages
        in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below
        the age of existing messages. In the future, new attributes might be added. If you write code that calls this
        action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account
        permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and
        a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny
        permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetQueueAttributes"),
            headers=[
                param[XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=set_queue_attributes_error_mapper,
            request_options=request_options,
        )

    def tag_queue(
        self,
        x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagQueueErrorBody]:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagQueue"),
            headers=[
                param[XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=tag_queue_error_mapper,
            request_options=request_options,
        )

    def untag_queue(
        self,
        x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagQueueErrorBody]:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagQueue"),
            headers=[
                param[XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=untag_queue_error_mapper,
            request_options=request_options,
        )


class AsyncQueuesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_queue(
        self,
        x_amz_target: XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateQueueErrorBody]:
        """Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following
        in mind: If you don't specify the FifoQueue attribute, Amazon SQS creates a standard queue. You can't change the
        queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must
        either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a
        FIFO queue. For more information, see Moving From a standard queue to a FIFO queue in the Amazon SQS Developer
        Guide. If you don't provide a value for an attribute, the queue is created with the default value for the
        attribute. If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
        To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues
        and is unique within the scope of your queues. After you create a queue, you must wait at least one second after
        the queue is created to be able to use the queue. To retrieve the URL of a queue, use the GetQueueUrl action.
        This action only requires the QueueName parameter. When creating queues, keep the following poi

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateQueue"),
            headers=[
                param[XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_queue_error_mapper,
            request_options=request_options,
        )

    async def delete_queue(
        self,
        x_amz_target: XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteQueueErrorBody]:
        """Deletes the queue specified by the QueueUrl, regardless of the queue's contents. Be careful with the
        DeleteQueue action: When you delete a queue, any messages in the queue are no longer available. When you delete
        a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60
        seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the
        message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a
        queue with the same name. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide. The delete operation uses
        the HTTP GET verb.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteQueue"),
            headers=[
                param[XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_queue_error_mapper,
            request_options=request_options,
        )

    async def get_queue_attributes(
        self,
        x_amz_target: XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetQueueAttributesErrorBody]:
        """Gets attributes for the specified queue. To determine whether a queue is FIFO, you can check whether
        QueueName ends with the .fifo suffix.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetQueueAttributes"),
            headers=[
                param[XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_queue_attributes_error_mapper,
            request_options=request_options,
        )

    async def get_queue_url(
        self,
        x_amz_target: XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetQueueUrlErrorBody]:
        """The GetQueueUrl API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's
        name but need to retrieve its URL for further operations. To access a queue owned by another Amazon Web Services
        account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. Note that the
        queue owner must grant you the necessary permissions to access the queue. For more information about accessing
        shared queues, see the AddPermission API or Allow developers to write messages to a shared queue in the Amazon
        SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetQueueUrl"),
            headers=[
                param[XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_queue_url_error_mapper,
            request_options=request_options,
        )

    async def list_dead_letter_source_queues(
        self,
        x_amz_target: XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListDeadLetterSourceQueuesErrorBody]:
        """Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead-letter
        queue. The ListDeadLetterSourceQueues methods supports pagination. Set parameter MaxResults in the request to
        specify the maximum number of results to be returned in the response. If you do not set MaxResults, the response
        includes a maximum of 1,000 results. If you set MaxResults and there are additional results to display, the
        response includes a value for NextToken. Use NextToken as a parameter in your next request to
        ListDeadLetterSourceQueues to receive the next page of results. For more information about using dead-letter
        queues, see Using Amazon SQS Dead-Letter Queues in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListDeadLetterSourceQueues"),
            headers=[
                param[XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_dead_letter_source_queues_error_mapper,
            request_options=request_options,
        )

    async def list_queues(
        self,
        x_amz_target: XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListQueuesErrorBody]:
        """Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you
        specify a value for the optional QueueNamePrefix parameter, only queues with a name that begins with the
        specified value are returned. The listQueues methods supports pagination. Set parameter MaxResults in the
        request to specify the maximum number of results to be returned in the response. If you do not set MaxResults,
        the response includes a maximum of 1,000 results. If you set MaxResults and there are additional results to
        display, the response includes a value for NextToken. Use NextToken as a parameter in your next request to
        listQueues to receive the next page of results. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListQueues"),
            headers=[
                param[XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_queues_error_mapper,
            request_options=request_options,
        )

    async def purge_queue(
        self,
        x_amz_target: XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PurgeQueueErrorBody]:
        """Deletes available messages in a queue (including in-flight messages) specified by the QueueURL parameter.
        When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The message deletion
        process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. Messages
        sent to the queue before you call PurgeQueue might be received but are deleted within the next minute. Messages
        sent to the queue after you call PurgeQueue might be deleted while the queue is being purged.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#PurgeQueue"),
            headers=[
                param[XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=purge_queue_error_mapper,
            request_options=request_options,
        )

    async def set_queue_attributes(
        self,
        x_amz_target: XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetQueueAttributesErrorBody]:
        """Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the
        change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system.
        Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes and will impact existing messages
        in the queue potentially causing them to be expired and deleted if the MessageRetentionPeriod is reduced below
        the age of existing messages. In the future, new attributes might be added. If you write code that calls this
        action, we recommend that you structure your code so that it can handle new attributes gracefully. Cross-account
        permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and
        a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny
        permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SetQueueAttributes"),
            headers=[
                param[XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=set_queue_attributes_error_mapper,
            request_options=request_options,
        )

    async def tag_queue(
        self,
        x_amz_target: XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TagQueueErrorBody]:
        """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding
        more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags
        as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag
        overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS
        Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant
        cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#TagQueue"),
            headers=[
                param[XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=tag_queue_error_mapper,
            request_options=request_options,
        )

    async def untag_queue(
        self,
        x_amz_target: XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UntagQueueErrorBody]:
        """Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS
        Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more
        information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UntagQueue"),
            headers=[
                param[XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=untag_queue_error_mapper,
            request_options=request_options,
        )
