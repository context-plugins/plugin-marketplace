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
from ..errors.activate_gateway3_error import ActivateGateway3ErrorBody, activate_gateway3_error_mapper
from ..errors.assign_tape_pool2_error import AssignTapePool2ErrorBody, assign_tape_pool2_error_mapper
from ..errors.evict_files_failing_upload_error import (
    EvictFilesFailingUploadErrorBody,
    evict_files_failing_upload_error_mapper,
)
from ..errors.join_domain2_error import JoinDomain2ErrorBody, join_domain2_error_mapper
from ..errors.notify_when_uploaded2_error import NotifyWhenUploaded2ErrorBody, notify_when_uploaded2_error_mapper
from ..errors.refresh_cache2_error import RefreshCache2ErrorBody, refresh_cache2_error_mapper
from ..errors.retrieve_tape_archive2_error import RetrieveTapeArchive2ErrorBody, retrieve_tape_archive2_error_mapper
from ..errors.retrieve_tape_recovery_point2_error import (
    RetrieveTapeRecoveryPoint2ErrorBody,
    retrieve_tape_recovery_point2_error_mapper,
)
from ..errors.shutdown_gateway2_error import ShutdownGateway2ErrorBody, shutdown_gateway2_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1_aws_storage_gateway_aws_storage_gateway_api import (
    XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
)
from ..models.enums.x_amz_target2_aws_storage_gateway_operations_api import (
    XAmzTarget2AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target3_aws_storage_gateway_operations_api import (
    XAmzTarget3AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target4_aws_storage_gateway_operations_api import (
    XAmzTarget4AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target5_aws_storage_gateway_operations_api import (
    XAmzTarget5AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target6_aws_storage_gateway_operations_api import (
    XAmzTarget6AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target7_aws_storage_gateway_operations_api import (
    XAmzTarget7AwsStorageGatewayOperationsApiOrStr,
)
from ..models.enums.x_amz_target8_aws_storage_gateway_operations_api import (
    XAmzTarget8AwsStorageGatewayOperationsApiOrStr,
)
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def activate_gateway3(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.activate_gateway3(x_amz_target, request_options=request_options))

    def assign_tape_pool2(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.assign_tape_pool2(x_amz_target, request_options=request_options))

    def evict_files_failing_upload(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts a process that cleans the specified file share's cache of file entries that are failing upload to
        Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no
        other cache clean operations currently in-progress for the specified file share. After a successful request, the
        cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If
        ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might
        otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing
        upload have been exhausted, and if your business need outweighs the potential data loss.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.evict_files_failing_upload(x_amz_target, request_options=request_options))

    def join_domain2(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.join_domain2(x_amz_target, request_options=request_options))

    def notify_when_uploaded2(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.notify_when_uploaded2(x_amz_target, request_options=request_options))

    def refresh_cache2(
        self,
        x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.refresh_cache2(x_amz_target, request_options=request_options))

    def retrieve_tape_archive2(
        self,
        x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.retrieve_tape_archive2(x_amz_target, request_options=request_options))

    def retrieve_tape_recovery_point2(
        self,
        x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_tape_recovery_point2(x_amz_target, request_options=request_options)
        )

    def shutdown_gateway2(
        self,
        x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.shutdown_gateway2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def activate_gateway3(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.activate_gateway3(x_amz_target, request_options=request_options))

    async def assign_tape_pool2(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.assign_tape_pool2(x_amz_target, request_options=request_options))

    async def evict_files_failing_upload(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts a process that cleans the specified file share's cache of file entries that are failing upload to
        Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no
        other cache clean operations currently in-progress for the specified file share. After a successful request, the
        cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If
        ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might
        otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing
        upload have been exhausted, and if your business need outweighs the potential data loss.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.evict_files_failing_upload(x_amz_target, request_options=request_options)
        )

    async def join_domain2(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.join_domain2(x_amz_target, request_options=request_options))

    async def notify_when_uploaded2(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.notify_when_uploaded2(x_amz_target, request_options=request_options)
        )

    async def refresh_cache2(
        self,
        x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.refresh_cache2(x_amz_target, request_options=request_options))

    async def retrieve_tape_archive2(
        self,
        x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_tape_archive2(x_amz_target, request_options=request_options)
        )

    async def retrieve_tape_recovery_point2(
        self,
        x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_tape_recovery_point2(x_amz_target, request_options=request_options)
        )

    async def shutdown_gateway2(
        self,
        x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.shutdown_gateway2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_gateway3(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGateway3ErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=activate_gateway3_error_mapper,
            request_options=request_options,
        )

    def assign_tape_pool2(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignTapePool2ErrorBody]:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssignTapePool"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=assign_tape_pool2_error_mapper,
            request_options=request_options,
        )

    def evict_files_failing_upload(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, EvictFilesFailingUploadErrorBody]:
        """Starts a process that cleans the specified file share's cache of file entries that are failing upload to
        Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no
        other cache clean operations currently in-progress for the specified file share. After a successful request, the
        cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If
        ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might
        otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing
        upload have been exhausted, and if your business need outweighs the potential data loss.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#EvictFilesFailingUpload"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=evict_files_failing_upload_error_mapper,
            request_options=request_options,
        )

    def join_domain2(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, JoinDomain2ErrorBody]:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#JoinDomain"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=join_domain2_error_mapper,
            request_options=request_options,
        )

    def notify_when_uploaded2(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, NotifyWhenUploaded2ErrorBody]:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#NotifyWhenUploaded"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=notify_when_uploaded2_error_mapper,
            request_options=request_options,
        )

    def refresh_cache2(
        self,
        x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RefreshCache2ErrorBody]:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RefreshCache"),
            headers=[
                param[XAmzTarget5AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=refresh_cache2_error_mapper,
            request_options=request_options,
        )

    def retrieve_tape_archive2(
        self,
        x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RetrieveTapeArchive2ErrorBody]:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeArchive"),
            headers=[
                param[XAmzTarget6AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=retrieve_tape_archive2_error_mapper,
            request_options=request_options,
        )

    def retrieve_tape_recovery_point2(
        self,
        x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RetrieveTapeRecoveryPoint2ErrorBody]:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeRecoveryPoint"),
            headers=[
                param[XAmzTarget7AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=retrieve_tape_recovery_point2_error_mapper,
            request_options=request_options,
        )

    def shutdown_gateway2(
        self,
        x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ShutdownGateway2ErrorBody]:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ShutdownGateway"),
            headers=[
                param[XAmzTarget8AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=shutdown_gateway2_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_gateway3(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGateway3ErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=activate_gateway3_error_mapper,
            request_options=request_options,
        )

    async def assign_tape_pool2(
        self,
        x_amz_target: XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignTapePool2ErrorBody]:
        """Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class
        that is associated with the pool. When you use your backup application to eject the tape, the tape is archived
        directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#AssignTapePool"),
            headers=[
                param[XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=assign_tape_pool2_error_mapper,
            request_options=request_options,
        )

    async def evict_files_failing_upload(
        self,
        x_amz_target: XAmzTarget2AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, EvictFilesFailingUploadErrorBody]:
        """Starts a process that cleans the specified file share's cache of file entries that are failing upload to
        Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no
        other cache clean operations currently in-progress for the specified file share. After a successful request, the
        cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If
        ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might
        otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing
        upload have been exhausted, and if your business need outweighs the potential data loss.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#EvictFilesFailingUpload"),
            headers=[
                param[XAmzTarget2AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=evict_files_failing_upload_error_mapper,
            request_options=request_options,
        )

    async def join_domain2(
        self,
        x_amz_target: XAmzTarget3AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, JoinDomain2ErrorBody]:
        """Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that
        support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default
        organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your
        Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you
        will need to create this account ahead of time. To create the gateway's computer account in an organizational
        unit other than the default, you must specify the organizational unit when joining the domain.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#JoinDomain"),
            headers=[
                param[XAmzTarget3AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=join_domain2_error_mapper,
            request_options=request_options,
        )

    async def notify_when_uploaded2(
        self,
        x_amz_target: XAmzTarget4AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, NotifyWhenUploaded2ErrorBody]:
        """Sends you notification through Amazon EventBridge when all files written to your file share have been
        uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written
        to your file share up to that point in time have been uploaded to Amazon S3. These files include files written
        to the file share up to the time that you make a request for notification. When the upload is done, Storage
        Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification
        through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File
        Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#NotifyWhenUploaded"),
            headers=[
                param[XAmzTarget4AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=notify_when_uploaded2_error_mapper,
            request_options=request_options,
        )

    async def refresh_cache2(
        self,
        x_amz_target: XAmzTarget5AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RefreshCache2ErrorBody]:
        """Refreshes the cached inventory of objects for the specified file share. This operation finds objects in the
        Amazon S3 bucket that were added, removed, or replaced since the gateway last listed the bucket's contents and
        cached the results. This operation does not import files into the S3 File Gateway cache storage. It only updates
        the cached inventory to reflect changes in the inventory of the objects in the S3 bucket. This operation is only
        supported in the S3 File Gateway types. You can subscribe to be notified through an Amazon CloudWatch event when
        your RefreshCache operation completes. For more information, see Getting notified about file operations in the
        Amazon S3 File Gateway User Guide. This operation is Only supported for S3 File Gateways. When this API is
        called, it only initiates the refresh operation. When the API call completes and returns a success code, it
        doesn't necessarily mean that the file refresh has completed. You should use the refresh-complete notification
        to determine that the operation has completed before you check for new files on the gateway file share. You can
        subscribe to be notified through a CloudWatch event when your RefreshCache operation complete

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RefreshCache"),
            headers=[
                param[XAmzTarget5AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=refresh_cache2_error_mapper,
            request_options=request_options,
        )

    async def retrieve_tape_archive2(
        self,
        x_amz_target: XAmzTarget6AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RetrieveTapeArchive2ErrorBody]:
        """Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes
        archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated
        with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in
        the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
        another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation
        is only supported in the tape gateway type.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeArchive"),
            headers=[
                param[XAmzTarget6AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=retrieve_tape_archive2_error_mapper,
            request_options=request_options,
        )

    async def retrieve_tape_recovery_point2(
        self,
        x_amz_target: XAmzTarget7AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RetrieveTapeRecoveryPoint2ErrorBody]:
        """Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape
        gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is
        consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.
        The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be
        retrieved to only a tape gateway. There is no charge for retrieving recovery points.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RetrieveTapeRecoveryPoint"),
            headers=[
                param[XAmzTarget7AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=retrieve_tape_recovery_point2_error_mapper,
            request_options=request_options,
        )

    async def shutdown_gateway2(
        self,
        x_amz_target: XAmzTarget8AwsStorageGatewayOperationsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ShutdownGateway2ErrorBody]:
        """Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource
        Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File
        Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's
        virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut
        down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you
        cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more
        information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes,
        and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response
        immediately. However, it might take some time for the gateway to shut down. You can call the
        DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend
        to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges
        associated with the

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ShutdownGateway"),
            headers=[
                param[XAmzTarget8AwsStorageGatewayOperationsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=shutdown_gateway2_error_mapper,
            request_options=request_options,
        )
